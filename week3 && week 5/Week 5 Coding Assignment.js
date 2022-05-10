class Singer {
    constructor(name, position){
        this.name= name;
        this.sauce= position;   
    }
    describe(){
        return `${this.name} has ${this.position}.`;
    }
}


class Band {
    constructor(name){
        this.name=name;
        this.singers= [];    //singers array  
    }
addSinger(singer){
    if(singer instanceof Singer){
        this.singers.push(singer);
    }else{
        throw new Error (`you can only add an instance of Singers. Argument is not a singer: ${singer}`);
    }
}
    describe() {
        return `${this.name} has ${this.position}`;
    }
}


class Menu{
    constructor(){
        this.bands=[];
        this.selectedBand= null;      
    }

  start() {
    let selection = this.showMeinMenuOptions();


    while(selection !=0){
        switch (selection){
            case '1':
                this.createBand();
                break;
            case '2':
                this.viewBand();
                break;
            case '3':
                this.deleteBand();
                break;
            case '4':
                this.displayBand();
                break;
            default:
                selection = 0;    
        }
        selection = this.showMeinMenuOptions();
    }


    alert('GoodBye!');
   }


   showMeinMenuOptions(){
       return prompt(`
       0) exit 
       1) create new band 
       2) view band 
       3) delete band 
       4) display all bands
       `)
   }

     showBandMenuoptions(bandinfo) {
    return prompt(`
    0) back 
    1) create singer
    2) delete singer
    -----------------------------
    ${ bandinfo } 
    `);
    }

   displayBands(){
       let bandString ='';
       for (let i= 0; i < this.bands.length; i++){
        bandString += i + ') ' + this.band[i].name + '\n';
       }
    alert(bandString);
   }


   createBand(){
       let name = prompt('Enter name for new Band');
       this.bands.push(new Band (name));
   }



   viewBand(){
       let index = prompt('Enter the index of the band you want to view ');
       if (index > -1 && index < this.bands.length){
           this.selectedBand = this.band[index];
           let description = 'Band name: ' + this.selectedBand.name + '\n';

           for (let i=0 ; i<this.selectedBand.singers.length; i++);{
           description += i + ') '+ this.selectedBand.singers[i].name + ' - '
             + this.selectedBand.singers[i].position + '\n';      
       }

       let selection = this.showBandMenuOptions(description);
       switch(selection){

        case '1' : 
            this.createSinger();
            break;
        case'2' : 
            this.deleteSinger();
            break; 

       }
   }
}

deleteBand(){
    let index = prompt('Enter the index of the band you wish to delete: ');
    if(index> 1 && index < this.bands.length){
        this.bands.splice(index,1);

    }
}

createSinger(){
    let name = prompt('Enter name for the new singer: ');
    let position = prompt('Enter position for the new singer: ');
    this.selectedBand.singers.push( new Singer (name, position));
}


deleteSinger( ){
    let index = prompt('Enter the index of the singer you wish to delete: ');
    if (index < -1 && index < this.selectedBand.singers.length){
        this.selectedBand.singers.splice(index, 1);

    }
}

}

let menu = new Menu();
menu.start();
