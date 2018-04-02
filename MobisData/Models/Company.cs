using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MobisData.Models
{
    public class Company
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Name cannot be longer than 50 characters.")]
        public string Name { get; set; }
        [Required]
        [StringLength(512, ErrorMessage = "Address cannot be longer than 512 characters.")]
        public string Address { get; set; }
        [Required]
        [StringLength(20, ErrorMessage = "PhoneNumber cannot be longer than 20 characters.")]
        public string PhoneNumber { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime EditedDate { get; set; }

        public List<Worker> Workers { get; set; }
    }
}
