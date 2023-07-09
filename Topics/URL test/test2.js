console.log("test AApasse");

function testURLClicked (e){
    console.log("Event : ",e);
    let currentUrl = window.location.href;
    console.info("current url : ",currentUrl)
    let url = new URL(currentUrl);
    url.searchParams.append("Abhishek","Don");
    url.searchParams.append("Abhishek1","Don1");
    console.info("current url : ",url.search)
    document.location.search = url.search //to reload page with new data 
}