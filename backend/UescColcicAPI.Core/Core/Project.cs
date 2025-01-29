using System;

namespace UescColcicAPI.Core
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Type { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        
        
        public int ProfessorId { get; set; }
        public virtual Professor Professor { get; set; }
    }
}
