﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MobisData.Models;
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

        // GET: api/Tasks
        [HttpGet]
        public IEnumerable<_Task> GetTasks()
        {
            return _context.Tasks;
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

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // PUT: api/Tasks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask([FromRoute] int id, [FromBody] _Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != task.Id)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tasks
        [HttpPost]
        public async Task<IActionResult> PostTask([FromBody] _Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTask", new { id = task.Id }, task);
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