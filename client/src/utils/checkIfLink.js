



export default {

    checkLink: value => (/(?<http>(http:[/][/]|us|edu|gov|net|org|www.)([a-z]|[A-Z]|[0-9]|[/.]|[~])*)/).test(value)? true : false, 

    checkString: (string) => (/^[a-zA-Z0-9\s.\-]+$/).test(string)? true : false, 

 }




 


	



