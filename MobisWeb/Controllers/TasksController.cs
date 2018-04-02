using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MobisData.Models;
using MobisWeb.Models;
using _Task = MobisData.Models.Task;

namespace MobisWeb.Controllers
{
    [Produces("application/json")]
    [Route("api/Tasks")]
    public class TasksController : Controller
    {
        private readonly MobisContext _context;

        public TasksController(MobisContext context)
        {
            _context = context;
        }

        // GET: api/Tasks/GetByWorker
        [HttpGet("GetByWorker/{id}")]
        public IEnumerable<TasksViewModel> GetTasks([FromRoute] int id)
        {
            var list = _context.Tasks.Where(x => x.WorkerId == id).Select(task => new TasksViewModel()
            {
                Deadline = task.Deadline.ToString("dd.MM.yyyy"),
                Id = task.Id,
                Priority = task.Priority,
                TaskDesc = task.TaskDesc,
                WorkerId = task.WorkerId
            });
            return list;
        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var task = await _context.Tasks.SingleOrDefaultAsync(m => m.Id == id);
            var _task = new TasksViewModel()
            {
                Deadline = task.Deadline.ToString("dd.MM.yyyy"),
                Id = task.Id,
                Priority = task.Priority,
                TaskDesc = task.TaskDesc,
                WorkerId = task.WorkerId
            };

            if (task == null)
            {
                return NotFound();
            }

            return Ok(_task);
        }

        // PUT: api/Tasks/5
        [HttpPut]
        public async Task<IActionResult> PutTask([FromBody]TasksViewModel model)
        {
            var task = _context.Tasks.Find(model.Id);
            task.Priority = model.Priority;
            task.TaskDesc = model.TaskDesc;
            task.Deadline = DateTime.ParseExact(model.Deadline, "d.M.yyyy", CultureInfo.InvariantCulture);
            task.EditedDate = DateTime.Now;
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

        // POST: api/Tasks
        [HttpPost]
        public async Task<IActionResult> PostTask([FromBody] TasksViewModel model)
        {
            _Task task = new _Task()
            {
                Deadline = DateTime.ParseExact(model.Deadline, "d.M.yyyy", CultureInfo.InvariantCulture),
                Priority = model.Priority,
                TaskDesc = model.TaskDesc,
                WorkerId = model.WorkerId,
                AddedDate = DateTime.Now,
                EditedDate = DateTime.Now
            };
            _context.Tasks.Add(task);
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

        // DELETE: api/Tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var task = await _context.Tasks.SingleOrDefaultAsync(m => m.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return Ok(task);
        }

        private bool TaskExists(int id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}