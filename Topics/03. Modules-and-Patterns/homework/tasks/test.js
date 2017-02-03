
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

let Academy = solve ();
Academy.addStudent ("Tts Ttsvov");
console.log (Academy.getAllStudents ());
