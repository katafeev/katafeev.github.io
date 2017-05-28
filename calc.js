function raschitat() {
						let a  = document.getElementById('a').value;
						let b  = document.getElementById('b').value;
						let broll  = document.getElementById('broll').value;
						let aroll  = document.getElementById('aroll').value;
						if(a == ""){
							alert("Вы не указали ширину");
							} else if(b == ""){
							alert("Вы не указали длину");
							} else if (aroll == "") {
							alert("Вы не указали ширину рулона");
							} else if (broll == "") {
							alert("Вы не указали длину рулона");
							} else {
								let price = 240;
								let quantity = Math.ceil(((a / aroll) * b) / broll);
								document.getElementById('quantity').innerHTML = "Вам понадобится: "+ quantity + " рулонов обоев";

								let val = quantity*price;
								document.getElementById('val').innerHTML = "Стоимость равна: "+ val +" р.";
							}
					}