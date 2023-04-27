var linkProjetos = [
	{
		linkProjeto: "https://github.com/luucasviana/contador-de-dias",
		/*linkImg: "",*/
		span: "2023",
		title: "Contador de Dias",
		subTitle: "HTML - CSS - JavaScript",
		resumo:
			"Projeto produziodo para exercitar o meu conhecimente com FrontEnd utilizando CSS e HTML.",
		like: 0
	},
	{
		linkProjeto: "https://github.com/luucasviana/react-native-calculadora",
		/*linkImg: "",*/
		span: "2023",
		title: "Calculadora",
		subTitle: "ReactNative - JavaScript - CSS",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto por Leonardo Moura no curso de ReactNative da Cod3r Cursos, através da Udemy. O projeto tinha foco em organizar os elementos através de componentes.",
		like: 0
	},
    {
		linkProjeto: "https://github.com/luucasviana/react-native-campo-minado",
		/*linkImg: "",*/
		span: "2022",
		title: "Campo Minado",
		subTitle: "ReactNative - JavaScript - CSS",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto por Leonardo Moura no curso de ReactNative da Cod3r Cursos, através da Udemy. O projeto de campo minado usando React Native, CSS e JavaScript serviu para consolidar os fundamentos do Flexbox, uma ferramenta importante para criar layouts responsivos em aplicações web e móveis.",
		like: 0
	},
    {
		linkProjeto: "https://github.com/luucasviana/react-native-formulario",
		/*linkImg: "",*/
		span: "2022",
		title: "Formulário",
		subTitle: "ReactNative - JavaScript - CSS",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto por Leonardo Moura no curso de ReactNative da Cod3r Cursos, através da Udemy. O projeto tinha foco em fazer formulário em React Native, CSS e JavaScript para ajudar a desenvolver habilidades práticas em desenvolvimento móvel e front-end, além de fornecer uma compreensão mais profunda sobre formulários e validação de dados.",
		like: 0
	},
    {
		/*linkImg: "",*/
		span: "2022",
		title: "Contador de Dias",
		subTitle: "ReactNative - JavaScript - CSS",
		resumo:
			"Projeto produziodo por mim mesmo como forma de exercitar conhecimentos adiquiridos durante o curso de React Native. O projeto feito para dispositivos moveis utilizando ReactNative contem as linguagens de CSS e JavaScript.",
		like: 0
	},
];

function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		/*elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';*/
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

/*Menu Hamburger*/

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".container-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});
