if (confirm('Почати тестування?')) {
	document.write(`<table border="3px">`)
	for (let line = 0; line < 3; line++) {
		document.write(`<tr>`)
		for (let column = 1; column <= 7; column++) {
			document.write(`<td> ${column} </td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}