const pdfjs = require("pdfjs-dist/legacy/build/pdf")

async function getContent(src, pageNum) {
    const doc = await pdfjs.getDocument(src).promise
    const page = await doc.getPage(pageNum)
    return await page.getTextContent()
}

async function getItem(src, pageNum) {
    const content = await getContent(src,pageNum)
    const items = content.items.map(item => {
        // console.log(item.str);
        return item.str
    })


    return items
}


async function parseAllPages() {
    const doc = await pdfjs.getDocument("./27-moe-2022.pdf").promise
    const numPages = await doc.numPages;
    for (let index = 1; index < numPages; index++) {
        const text = getItem("./27-moe-2022.pdf", index)
        console.log(typeof text);
        // if(text.includes("Expansion of AWWA School at Former Bedok West")) {
        //     console.log(text);
        // }
        break
    }

}

parseAllPages()
