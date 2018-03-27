using System;
using System.Collections.Generic;
using System.Text;

namespace MobisData.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime EditedDate { get; set; }

        public List<Worker> Workers { get; set; }
    }
}
