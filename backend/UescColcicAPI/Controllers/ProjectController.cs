using Microsoft.AspNetCore.Mvc;
using UescColcicAPI.Services.BD.Interfaces;
using UescColcicAPI.Services.ViewModels;
using UescColcicAPI.Services.InputModels;


namespace UescColcicAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectsCRUD _projectsCRUD;

        public ProjectsController(IProjectsCRUD projectsCRUD)
        {
            _projectsCRUD = projectsCRUD;
        }

       
        [HttpGet(Name = "GetProjects")]
        public ActionResult<IEnumerable<ProjectViewModel>> Get()
        {
            try
            {
                var projects = _projectsCRUD.ReadAll();
                return Ok(projects);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

       
        [HttpGet("{id}", Name = "GetProject")]
        public ActionResult<ProjectViewModel> Get(int id)
        {
            try
            {
                var project = _projectsCRUD.ReadById(id);
                if (project == null)
                {
                    return NotFound($"Project with ID {id} not found.");
                }

                return Ok(project);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // POST: api/Projects
        [HttpPost(Name = "CreateProject")]
        public ActionResult Create([FromBody] ProjectInputModel projectInputModel)
        {
            try
            {
                int newProjectId = _projectsCRUD.Create(projectInputModel);
                return CreatedAtRoute("GetProject", new { id = newProjectId }, projectInputModel);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PUT: api/Projects/5
        [HttpPut("{id}", Name = "UpdateProject")]
        public ActionResult Update(int id, [FromBody] ProjectInputModel projectInputModel)
        {
            try
            {
                var existingProject = _projectsCRUD.ReadById(id);
                if (existingProject == null)
                {
                    return NotFound($"Project with ID {id} not found.");
                }

                _projectsCRUD.Update(id, projectInputModel);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}", Name = "DeleteProject")]
        public ActionResult Delete(int id)
        {
            try
            {
                var project = _projectsCRUD.ReadById(id);
                if (project == null)
                {
                    return NotFound($"Project with ID {id} not found.");
                }

                _projectsCRUD.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
