using System;
using System.Collections.Generic;
using System.Text;

namespace MobisData.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string TaskDesc { get; set; }
        public DateTime Deadline { get; set; }
        public int Priority { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime EditedDate { get; set; }

        public int WorkerId { get; set; }
        public Worker Worker { get; set; }
    }
}
