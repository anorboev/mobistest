using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Extensions.Internal;
using MobisData.Models;
using MobisWeb.Models;

namespace MobisWeb.Controllers
{
    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompaniesController : Controller
    {
        private readonly MobisContext _context;

        public CompaniesController(MobisContext context)
        {
            _context = context;
        }

        // GET: api/Companies
        [HttpGet]
        public JsonResult GetCompanies()
        {
            var list = _context.Companies.Select(x => new CompanyListViewModel()
            {
                Address = x.Address,
                Id = x.Id,
                Name = x.Name,
                PhoneNumber = x.PhoneNumber,
                WorkersQuantity = x.Workers.Count()
            }); 
            var json = Json(list);
            return json;
        }

        // GET: api/Companies/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompany([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var company = await _context.Companies.SingleOrDefaultAsync(m => m.Id == id);

            if (company == null)
            {
                return NotFound();
            }

            return Ok(company);
        }

        // PUT: api/Companies/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany([FromBody]Company model)
        {
            var company = _context.Companies.Find(model.Id);
            company.Name = model.Name;
            company.Address = model.Address;
            company.PhoneNumber = model.PhoneNumber;
            company.EditedDate = DateTime.Now;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                return Ok(false);
            }

            return Ok(true);
        }

        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> PostCompany([FromBody] Company company)
        {
            if (!ModelState.IsValid)
            {
                return Ok(false);
            }
            company.AddedDate = DateTime.Now;
            company.EditedDate = DateTime.Now;
            _context.Companies.Add(company);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                return Ok(false);
            }

            return Ok(true);
        }

        // DELETE: api/Companies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var company = await _context.Companies.SingleOrDefaultAsync(m => m.Id == id);
            if (company == null)
            {
                return NotFound();
            }

            _context.Companies.Remove(company);
            await _context.SaveChangesAsync();

            return Ok(company);
        }

        private bool CompanyExists(int id)
        {
            return _context.Companies.Any(e => e.Id == id);
        }

        [HttpGet("fordropdown")]
        public JsonResult GetForDropDown()
        {
            var list = _context.Companies.Select(x => new DropDownModel(x.Id, x.Name)).ToList();
            list.Insert(0, new DropDownModel(null, "All"));
            return Json(list);
        }
    }
}