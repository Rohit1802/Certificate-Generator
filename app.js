const generatePDF = async(name)=>{
    const {PDFDocument ,rgb} = PDFLib;

    const exBytes = await fetch('./Dark Blue & Beige Simple Sport Certificate (1).pdf').then((res)=>{
        return res.arrayBuffer();
    })
    
    const exFont = await fetch("./Roboto-Bold.ttf").then(res=>{
        return res.arrayBuffer()
    })

    const pdfDoc = await PDFDocument.load(exBytes);
    // pdfDoc.registerFontkit(fontKit);
    // const myFont = await pdfDoc.embedFont(exFont)

    const pages = pdfDoc.getPages();
    const firstPg = pages[0]

    firstPg.drawText(name,{
        x:285,
        y:300,
        size:30,
        color: rgb(.2,0.84,0.67)
    })

    const uri = await pdfDoc.saveAsBase64({dataUri :true})
    
    saveAs(uri ,"Oyster Kode Certificate.pdf" ,{autoBom:true})
    // document.querySelector('#mypdf').src = uri;
}


const button = document.querySelector('#submit')
const inputVal = document.querySelector('#name')

button.addEventListener("click",()=>{
    const val = inputVal.value 
    generatePDF(val)
})
