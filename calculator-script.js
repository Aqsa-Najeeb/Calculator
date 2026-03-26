let a = "";
			let b = "";
			let operator = null;

			const display = document.getElementById("ansDisplay");

			function updateDisplay(value) 
			{
				display.innerHTML = value || 0;
			}

			// Number input
			function numberInput(num) 
			{
				if (operator === null) 
				{
					a += num; //concatenates
					updateDisplay(a);
				} 
				else 
				{
					b += num;
					updateDisplay(b);
				}
			}

			// Operator inputs
			function operatorInput(op) 
			{
				if (a === "") 
				return;
				
				operator = op;
				updateDisplay(op);
			}

			// Calculate Result
			function calculate() 
			{
				let numA = parseFloat(a);
				let numB = parseFloat(b);
				let result = 0;

				if (operator === "+")
				{ 
					result = numA + numB;
				}
				else if (operator === "-") 
				{
					result = numA - numB;
				}
				else if (operator === "*") 
				{
					result = numA * numB;
				}
				else if (operator === "/") 
				{
					if (numB === 0) {
						updateDisplay("Error");
						return;
					}
					result = numA / numB;
				}

				updateDisplay(result);

				a = result.toString();
				b = "";
				operator = null;
			}

			function clear() 
			{
				a = "";
				b = "";
				operator = null;
				updateDisplay(0);
			}

			// digits
			document.querySelectorAll(".num").forEach(btn => 
			{
				btn.addEventListener("click", () => 
				{
					numberInput(btn.dataset.value);
				});
			});

			/// operators
			document.querySelectorAll(".op").forEach(btn => 
			{
				btn.addEventListener("click", () => 
				{
					operatorInput(btn.dataset.value);
				});
			});


			document.getElementById("equal").onclick = calculate;
			document.getElementById("c").onclick = clear;