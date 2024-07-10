let a=0, b=0, operator=0;
		
			
			//CLICKING BUTTONS
			
			document.getElementById("one").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 1;
					}
					else
					{
						a = a + "1";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 1;
					}
					else
					{
						b = b + "1";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("two").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 2;
					}
					else
					{
						a = a + "2";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 2;
					}
					else
					{
						b = b + "2";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("three").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 3;
					}
					else
					{
						a = a + "3";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 3;
					}
					else
					{
						b = b + "3";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("four").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 4;
					}
					else
					{
						a = a + "4";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 4;
					}
					else
					{
						b = b + "4";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("five").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 5;
					}
					else
					{
						a = a + "5";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 5;
					}
					else
					{
						b = b + "5";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("six").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 6;
					}
					else
					{
						a = a + "6";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 6;
					}
					else
					{
						b = b + "6";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("seven").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 7;
					}
					else
					{
						a = a + "7";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 7;
					}
					else
					{
						b = b + "7";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("eight").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 8;
					}
					else
					{
						a = a + "8";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 8;
					}
					else
					{
						b = b + "8";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("nine").addEventListener("click", function() 
			{
				if(operator==0)
				{
					if(a==0)
					{
						a = 9;
					}
					else
					{
						a = a + "9";
					}
					document.getElementById("ansDisplay").innerHTML = a;
				}
				else
				{
					if(b==0)
					{
						b = 9;
					}
					else
					{
						b = b + "9";
					}
					document.getElementById("ansDisplay").innerHTML = b;
				}
			});
			
			document.getElementById("zero").addEventListener("click", function() 
			{
				if(operator==0)
					{
						if(a==0)
						{
							a = 0;
						}
						else
						{
							a = a + "0";
						}
						document.getElementById("ansDisplay").innerHTML = a;
					}
					else
					{
						if(b==0)
						{
							b = 0;
						}
						else
						{
							b = b + "0";
						}
						document.getElementById("ansDisplay").innerHTML = b;
					}
			});
			
			document.getElementById("plus").addEventListener("click", function() 
			{
				operator = 1;
				document.getElementById("ansDisplay").innerHTML = "+";
			});
			
			document.getElementById("minus").addEventListener("click", function() 
			{
				operator = 2;
				document.getElementById("ansDisplay").innerHTML = "-";
			});
			
			document.getElementById("ster").addEventListener("click", function() 
			{
				operator = 3;
				document.getElementById("ansDisplay").innerHTML = "*";
			});
			
			document.getElementById("slash").addEventListener("click", function() 
			{
				operator = 4;
				document.getElementById("ansDisplay").innerHTML = "/";
			});
			
			
			
			document.getElementById("equal").addEventListener("click", function() 
			{
				let numA = parseInt(a);
				let numB = parseInt(b);
				let result;
				
				
				if(operator==1)
				{
					result = numA+numB;
				}
				else if(operator==2)
				{
					result = numA-numB;
				}
				else if(operator==3)
				{
					result = numA*numB;
				}
				else if(operator==4)
				{
					result = numA/numB;
				}
				
				document.getElementById("ansDisplay").innerHTML = result;
				
				operator = 0;
				a = 0;
				b = 0;
			});
			
			
			document.getElementById("c").addEventListener("click", function() 
			{
				operator = 0;
				a = 0;
				b = 0;
				document.getElementById("ansDisplay").innerHTML = 0;
				
			});