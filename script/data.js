const images = ['./img/schnelles.käsespätzle.png', './img/carbonara.jpeg', './img/shrimps.jpg']

const recipe = ['./recipe_anton.html', './recipe_oliver.html', './recipe_meik.html']

const recipeText = [
	"Käsespätzle ist ein herzhaftes Gericht aus der deutsch-österreichischen Küche, das Komfort und Geschmack perfekt vereint. Frisch zubereitete Spätzle, eine Art weiche Eiernudeln, werden mit würzigem Bergkäse geschichtet und mit gerösteten Zwiebeln verfeinert. Der Käse schmilzt zwischen den Spätzle und bildet eine köstlich cremige Textur, während die Zwiebeln eine würzige und knusprige Note hinzufügen. Jeder Bissen ist ein Genuss voller Wärme und Geschmack, der den Gaumen verwöhnt. Käsespätzle ist ein traditionelles Gericht, das Gemütlichkeit auf den Teller bringt und die Aromen der Region einfängt.",
	"Spaghetti Carbonara ist ein klassisches italienisches Gericht, das Einfachheit und Geschmack vereint. Al dente gekochte Spaghetti werden mit einer cremigen Sauce aus Eiern, Parmesankäse, Speck und schwarzem Pfeffer überzogen. Die Wärme der Nudeln hilft, die Sauce zu binden, während der Speck eine salzige Note und der Pfeffer eine leichte Schärfe hinzufügen. Das Ergebnis ist ein harmonisches Zusammenspiel von Texturen und Aromen, das jeden Gaumen erfreut. Spaghetti Carbonara ist ein zeitloser Favorit, der die Essenz der italienischen Küche in jeder köstlichen Gabel widerspiegelt",
	"Panierte Shrimps mit Ranchdip sind eine perfekte Fusion aus Knusprigkeit und cremiger Würze. Zarte Garnelen werden in eine würzige Panade getaucht und goldbraun frittiert. Der Ranchdip aus saurer Sahne, Mayonnaise und Kräutern bietet eine erfrischende Ergänzung. Die Kombination aus dem salzigen Meeresgeschmack der Shrimps und der würzigen Note des Dips macht dieses Gericht zu einem unwiderstehlichen Genuss für Meeresfrüchte-Liebhaber und Feinschmecker gleichermaßen"
]

const recipeTitle = [" - Schnelle Käsespätzle", " - Spaghetti Carbonara", " - Panierte Shrimps mit Ranchdip"]


const recipes = [

    {
        image : "",
        url : "",
        text: ""

    },

    {
        image : "",
        url : "",
        text: ""

    },



]


const loopTime = 5000;

let imgIndex = 1,
    recipeIndex = 1,
    recipeTextIndex = 1,
    recipeTitleIndex = 1;

let intervalID;