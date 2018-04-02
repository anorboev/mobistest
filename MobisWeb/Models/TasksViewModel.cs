using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobisWeb.Models
{
    public class TasksViewModel
    {
        public int Id { get; set; }
        public string TaskDesc { get; set; }
        public string Deadline { get; set; }
        public int Priority { get; set; }
        public int WorkerId { get; set; }
    }
}
