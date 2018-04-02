using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobisWeb.Models
{
    public class DropDownModel
    {
        public DropDownModel(int? value, string label)
        {
            this.label = label;
            this.value = value;
        }
        public int? value { get; set; }
        public string label { get; set; }
    }
}
