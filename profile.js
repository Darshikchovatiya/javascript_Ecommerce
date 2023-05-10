function profile(){
    let P_data = JSON.parse(localStorage.getItem('checkAdminLogin'));
    let info = "";

    info = `
                <h5 class="mb-0 font-weight-normal">${P_data.name}</h5>
                <span>${P_data.email}</span>
            `
        document.getElementById('Profile').innerHTML = info;
}
profile();

