/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
	let title, 
	    presentations = [], 
		students = [];
	return {
		init: function(param_title, param_presentations) {
			if (arguments.length < 2)
				throw new Error ("Too less parameters");
			if (param_title.trim () != param_title)
				throw new Error ("Unexpected spaces");
			for (let i = 0 ; i < param_title.length - 1 ; i += 1)
				if (param_title [i] === " " && param_title [i + 1] === " ")
					throw new Error ("Too many spaces");
			if (param_title.length < 1)
				throw new Error ("Too short");
			if (param_presentations.length < 1)
				throw new Error ("Too less number of presentations");

			title = param_title;
			presentations = param_presentations.slice (0);
			return this;
		},
		addStudent: function(name) {
			if (name.split (" ").length > 2)
				throw new Error ("Too many names");
			let fname = name.split (" ")[0];
			let lname = name.split (" ")[1];
			if (fname [0] != fname [0].toUpperCase ())
				throw new Error ("Doesn\'t start with upper case letter");
			if (lname [0] != lname [0].toUpperCase ())
				throw new Error ("Doesn\'t start with upper case letter");
			for (let i = 1 ; i < fname.length ; i += 1)
				if (fname [i] != fname [i].toLowerCase ())
					throw new Error ("Doesn\'t contain only lower case letter");
			for (let i = 1 ; i < lname.length ; i += 1)
				if (lname [i] != lname [i].toLowerCase ())
					throw new Error ("Doesn\'t contain only lower case letter");
					
			let student = {ID: students.length + 1, firstname: fname, lastname: lname};
			students.push (student);
			return student;
		},
		getAllStudents: function() {
			return students.slice (0);
		},
		submitHomework: function(studentID, homeworkID) {
			for (let x in homeworkID)
			{
				if (presentations.indexOf (x) === -1)
					throw new Error ("Cannot find homework");
			}
		},
		pushExamResults: function(results) {
		},
		getTopStudents: function() {
		}
	};
}


module.exports = solve;
