// Guardamos las empresas a Crear en Formulario 
const empresas =[]
const empresasguardadas=document.getElementById("empresasguardadas")
console.log("empresasguardadas",empresasguardadas)
// Obtener el formulario y agregar un controlador de eventos para cuando se envíe
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
	// Detener la acción predeterminada del formulario de enviar datos
	event.preventDefault();

	// Obtener los valores de entrada de Formulario para hacer calculos
	const nombreEmpresa = document.getElementById("nombre-empresa").value;
	const tipoSocietario = document.getElementById("tipo-societario").value;
	const actividadPrincipal = document.getElementById("actividad-principal").value;

	const cajayBanco = parseFloat(document.getElementById("caja-banco").value);
	const creditosVentas = parseFloat(document.getElementById("creditos-ventas").value);
    const mercaderia = parseFloat(document.getElementById("mercaderia").value);

    const rodados = parseFloat(document.getElementById("rodados").value);
    const inmueble = parseFloat(document.getElementById("inmueble").value);

    const deudasCortoPlazo = parseFloat(document.getElementById("deudas-corto-plazo").value);
    const deudasLargoPlazo = parseFloat(document.getElementById("deuda-largo-plazo").value);

    const capital = parseFloat(document.getElementById("capital").value);
  

	const ventas = parseFloat(document.getElementById("ventas").value);
	const costoVentas = parseFloat(document.getElementById("costos-de-ventas").value);
	const gastos = parseFloat(document.getElementById("gastos").value);
    const intereses = parseFloat(document.getElementById("intereses").value);
    		
	// Calcular las relaciones necesarias
	const resultadosAntesIntereses =ventas-costoVentas-gastos
    const resultadosAntesImpuestos = resultadosAntesIntereses-intereses
    const impuestos=resultadosAntesImpuestos* 0.35
    const resultados = resultadosAntesIntereses-impuestos
    const patrimonioNeto = capital+resultados
    const activoCorriente = cajayBanco + creditosVentas  + mercaderia 
    const activoNocorriente = rodados + inmueble
    const activoTotal = activoCorriente +activoNocorriente
    console.log ({resultadosAntesIntereses,resultadosAntesImpuestos,impuestos,resultados,patrimonioNeto,activoCorriente,activoNocorriente,activoTotal})
    

    //Calulo de Variables. 
    const liquidezCorriente = activoCorriente / deudasCortoPlazo
    document.getElementById("liquidezCorriente").textContent = liquidezCorriente;

    const acidTest =  ( activoCorriente-mercaderia) /deudasCortoPlazo
    document.getElementById("pruebaacida").textContent = acidTest;

    const liquidezSeca = ( activoCorriente-mercaderia) /deudasCortoPlazo
    document.getElementById("liquidezseca").textContent = liquidezSeca;

    const coberturaIntereses =  (resultadosAntesIntereses)/intereses     
    document.getElementById("coberturaintereses").textContent = coberturaIntereses;
     
     const beneficioBruto = (ventas-costoVentas)/ventas
     document.getElementById("beneficioBruto").textContent =beneficioBruto; 

     const beneficio = resultados/ventas
     document.getElementById("beneficio").textContent = liquidezCorriente;
    
//  const roa = resultados/activoTotal
//  document.getElementById("resLiquidezCorriente").textContent = liquidezCorriente;
     
//     const roe = resultados/patrimonioNeto
    


const datos= {
    nombreEmpresa,tipoSocietario,actividadPrincipal, liquidezCorriente,acidTest,liquidezSeca,beneficioBruto
}
empresas.push(datos)
empresasguardadas.innerHTML+="<div>"+nombreEmpresa+"</div>"
}
)

