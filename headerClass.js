class Headers {


    headersArangment(headers) {
        let headersTemplate = ['Username', 'Name', 'Email', 'Department']
        let areHeadersOk = true;
        let csvObj = {
            arangedHeaders: [],
            originHeadersPositions: []
        }
        
        headers.forEach((header, index) => {
            let currentHeader = header[0].toUpperCase() + header.slice(1, header.length).toLowerCase()

            if (currentHeader === "Username") {
                let headerObj = {
                    originIndex: index,
                    header: currentHeader
                }
                csvObj.originHeadersPositions[0] = headerObj;
                csvObj.arangedHeaders[0] = currentHeader

            }
            if (currentHeader === "Name") {
                let headerObj = {
                    originIndex: index,
                    header: currentHeader
                }
                csvObj.originHeadersPositions[1] = headerObj;
                csvObj.arangedHeaders[1] = currentHeader

            }
            if (currentHeader === "Email") {
                let headerObj = {
                    originIndex: index,
                    header: currentHeader
                }
                csvObj.originHeadersPositions[2] = headerObj;
                csvObj.arangedHeaders[2] = currentHeader

            }
            if (currentHeader === "Department") {
                let headerObj = {
                    originIndex: index,
                    header: currentHeader
                }
                csvObj.originHeadersPositions[3] = headerObj;
                csvObj.arangedHeaders[3] = currentHeader

            }
            if (currentHeader === "Phone") {
                let headerObj = {
                    originIndex: index,
                    header: currentHeader
                }
                csvObj.originHeadersPositions[4] = headerObj;
                csvObj.arangedHeaders[4] = currentHeader

            }
        })
        for(let i = 0; i < csvObj.arangedHeaders.length; i++){
            if(csvObj.arangedHeaders[i] !== headersTemplate[i]) areHeadersOk = false; break;
        }
        if(areHeadersOk === true) return csvObj; else return false
         
        

    }

}

var headersClass = new Headers()
module.exports = headersClass;