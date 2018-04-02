using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MobisData.Models
{
    public class Task
    {
        public int Id { get; set; }
        [Required]
        [StringLength(512, ErrorMessage = "TaskDesc cannot be longer than 512 characters.")]
        public string TaskDesc { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Deadline { get; set; }
        public int Priority { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime EditedDate { get; set; }

        public int WorkerId { get; set; }
        public Worker Worker { get; set; }
    }
}
