using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PartyMaker.Domain.Models
{
    public class OrderPreviewDto
    {
        public Guid Id { get; set; }
        public string OrderShortInfo { get; set; }
    }
}