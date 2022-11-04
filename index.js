function showLoader(){
    const loaderDiv=document.createElement('div');
    loaderDiv.classList.add('loader');
    loaderDiv.innerHTML=`<div class="vh-100 d-flex justify-content-center align-item-center fixed-top">
    <div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div></div>
    `
    document.body.append(loaderDiv)
}
function removeLoader(){
    document.querySelector(".loader").remove();

}

function showProgress(){
    const progressDiv=document.createElement('div');
    progressDiv.classList.add('.top-progress');
    progressDiv.innerHTML=`<div class="vh-100 d-flex justify-content-center align-item-center fixed-top">
        <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div>
        </div>
    `
    document.body.append(progressDiv)
}

function removeProgress(){
    document.querySelector(".top-progress").remove()
}

