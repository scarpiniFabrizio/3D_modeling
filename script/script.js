$(document).bind('contextmenu', function(){
    return false;
});

const blender_folder = 'blender';
const blender_folder_logo = 'blender_logo';
const blender_pics = [
    'Robots_in_Bruxelles',
    'Barrels',
    'bender',
    'calice',
    'canon',
    'canon1800',
    'dounuts',
    'evilShield',
    'gingerbread man',
    'hell',
    'inside_spaceship',
    'interieur',
    'jardin',
    'Lego',
    'marioOnNesFiligran',
    'pokeball',
    'spaceship',
    'swordStone',
    'whiteChapel',
    'ww2GunWithWater'
]
const maya_folder = 'maya';
const maya_folder_logo = 'maya_logo';
const maya_pics = [
    'bow',
    'castle',
    'Darkness_castle',
    'darknessCastle',
    'EpicLandscape',
    'fantasySword',
    'invasion',
    'kingSword',
    'knifeSpike',
    'lightSaber',
    'lightSaberArnold',
    'machineGun',
    'Pirate',
    'pub',
    'Saber',
    'snake',
    'spaceShipOnEarth',
    'swordAfterWar',
    'swordSkullGold',
    'tower',
]

const create_image = (folder, source, extension) => {
    let div = document.createElement('div');
    div.className = 'image_div col-12 col-sm-6 col-md-4 col-lg-3 p-2';

    let link = document.createElement('a');
    link.className = 'zoom';
    link.title = source;

    if(folder === 'blender_logo')
        link.href = `./images/blender/${source}.png`;
    if(folder === 'maya_logo')
        link.href = `./images/maya/${source}.png`;
    
    let img = document.createElement('img');
    img.src = `./images/${folder}/${source}.${extension}`;
    img.className = 'img-fluid creations_image';
    img.alt = source;

    link.appendChild(img)
    div.appendChild(link);

    let display_zone = document.getElementById('pictures_row_section');
    display_zone.appendChild(div);
}

for(let i = 0; i < blender_pics.length; i++){
    create_image(blender_folder_logo, blender_pics[i], 'jpg');
    create_image(maya_folder_logo, maya_pics[i], 'jpg');
}

//colorbox
jQuery(document).ready(function () {
    jQuery('a.zoom').colorbox({ opacity:0.5 , rel:'group1' });
    $(".zoom").colorbox({opacity:0.5, width:1240, height:700, rel:"landscapes", escKey:true});
    var cBoxOption = {  
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
    }
});