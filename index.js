// Code your solution in this file!
function distanceFromHqInBlocks(somVal){
    if (somVal>42)
    return (somVal-42)
    if (somVal<42)
    return (42-somVal)
}

function distanceFromHqInFeet(somVal){
    distanceFromHqInBlocks(somVal)
    if (somVal>42)
    return ((somVal-42)*264)
    if (somVal<42)
    return ((42-somVal)*264)
}

function distanceTravelledInFeet(val1, val2){
    if(val1 > val2){
        return (val1 - val2) * 264;
    } else if (val1 < val2) {
        return (val2 - val1) *264;
    }

}


function calculatesFarePrice(val1, val2){ 
    let calcDistance = distanceTravelledInFeet(val1, val2);
    let fare = 0;

    if (calcDistance > 400 && calcDistance < 2000){
        let fareDistance = calcDistance - 400; 
        fare = fareDistance * .02;
    } else if (calcDistance > 2000 && calcDistance < 2500){
        fare = 25;
    } else if (calcDistance > 2500){
        return "cannot travel that far";
    }

    return fare;




    

 




}