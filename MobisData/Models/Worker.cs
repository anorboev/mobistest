using System;
using System.Collections.Generic;
using System.Text;

namespace MobisData.Models
{
    public class Worker
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime EditedDate { get; set; }

        public int ComponyId { get; set; }
        public Company Company { get; set; }

        public List<Task> Tasks { get; set; }
    }
}
