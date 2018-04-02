using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MobisData.Models;
using MobisWeb.Models;

namespace MobisWeb.Controllers
{
    [Produces("application/json")]
    [Route("api/Workers")]
    public class WorkersController : Controller
    {
        private readonly MobisContext _context;

        public WorkersController(MobisContext context)
        {
            _context = context;
        }

        // GET: api/Workers
        [HttpGet]
        public IEnumerable<WorkersViewModel> GetWorkers()
        {
            var list = _context.Workers.ToList().Select(w => new WorkersViewModel()
            {
                Address = w.Address,
                CompanyName = _context.Companies.Find(w.CompanyId).Name,
                CompanyId = w.CompanyId,
                FullName = w.FullName,
                Id = w.Id,
                PhoneNumber = w.PhoneNumber
            });
            return list;
        }

        // GET: api/Workers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorker([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var worker = await _context.Workers.SingleOrDefaultAsync(m => m.Id == id);

            if (worker == null)
            {
                return NotFound();
            }

            return Ok(worker);
        }

        // PUT: api/Workers
        [HttpPut]
        public async Task<IActionResult> PutWorker([FromBody] Worker model)
        {
            var worker = _context.Workers.Find(model.Id);
            worker.FullName = model.FullName;
            worker.Address = model.Address;
            worker.PhoneNumber = model.PhoneNumber;
            worker.CompanyId = model.CompanyId;
            worker.EditedDate = DateTime.Now;
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

        // POST: api/Workers
        [HttpPost]
        public async Task<IActionResult> PostWorker([FromBody] Worker worker)
        {
            worker.AddedDate = DateTime.Now;
            worker.EditedDate = DateTime.Now;
            _context.Workers.Add(worker);
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

        // DELETE: api/Workers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorker([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var worker = await _context.Workers.SingleOrDefaultAsync(m => m.Id == id);
            if (worker == null)
            {
                return NotFound();
            }

            _context.Workers.Remove(worker);
            await _context.SaveChangesAsync();

            return Ok(worker);
        }

        private bool WorkerExists(int id)
        {
            return _context.Workers.Any(e => e.Id == id);
        }
    }
}