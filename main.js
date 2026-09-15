const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];


let prompt = require(`prompt-sync`)();


let tickets=[];
let ticket_count=0;
let trainmax=50;

main()



function main() {
    let n;
    do {
        console.log("=================================")
        console.log("        RAILWAY MANAGER")
        console.log("=================================")
        console.log("\n")
        console.log("1. Afficher les trajets")
        console.log("2. Acheter un ticket")
        console.log("3. Afficher les tickets")
        console.log("4. Annuler un ticket")
        console.log("5. Rechercher un ticket")
        console.log("6. Filtrer les trajets")
        console.log("7. Trier les trajets")
        console.log("8. statistiques")
        console.log("0. Quitter")
        console.log("")
    
        n = (prompt('Votre choix :').trim());
        if (n===""){
            console.log("votre choix est unvalide")
            continue
        }else{n=Number(n)}
        switch (n) {
                     
            case 1:
                show_trips();
                prompt('Appuyez sur Entrée pour revenir au menu principal.');
                n=9
            break;
            case 2:
                buy_teckets();
            break;
            case 3:
                chow_teckets()
            break;
            case 4:
                cancel_ticket()
            break;
            case 5:
                search_ticket()
            break;
            case 6:
                filtering_tickets()
            break;
            case 7: 
                trajet_sorting()
            break;
            case 8:
                statistique()
            break;
            case 0:
                console.log("END");
            break;
            default:
                console.log("you choix is not available please enter a number between 1 and 7 or 0 to exit");
                prompt('Appuyez sur Entrée pour revenir au menu principal.');
            break;
        }
    } while (n!==0)
}





// afficher les trajets

function show_trips(){
    console.log("=== TRAJETS DISPONIBLES ===")
    for(let i=0;i<trips.length;i++){
       console.log(`---------------------------\n#${trips[i].id} ${trips[i].departure} → ${trips[i].destination} \nDépart : ${trips[i].departureTime} \nArrivée : ${trips[i].arrivalTime} \nPrix : ${trips[i].price} DH\nPlaces disponibles : ${trips[i].availableSeats} \n`)
       
    }
 



}


// buy tickets
function buy_teckets(){
   
    let x;
    let name =prompt("Nom du passager : ")
    let name_fillter=name.toLowerCase().trim();
    let filter_check=0;
    let filter_id=0

    let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
    let nums=["0","1","2","3","4","5","6","7","8","9",]
    
    for (let i=0;i<name_fillter.length;i++){
       for(let j=0;j<alpha.length;j++){
         if(name_fillter[i]===alpha[j]){
            filter_check++


        }
       }

    }
        if (filter_check===name_fillter.length){
            let tripid=prompt("Identifiant du trajet :").trim()
            for (let i=0;i<tripid.length;i++){
                for (let j=0;j<nums.length;j++){
                    if(tripid[i]===nums[j]){
                    filter_id++
                }
            }
            }
            tripid=Number(tripid);
            if (filter_id===String(tripid).length&&tripid>0){
                
                const tripcheck=trips.find(trip => trip.id ===tripid);//this also alow yoou to get the trip that has the same id that the user gives"tripid"
                if (tripcheck!==0){
                    if (tripcheck.availableSeats>0){
                        console.log(`\n-----------------------------------\npour le trajet de ${tripcheck.departure} -> ${tripcheck.destination} il rest : ${tripcheck.availableSeats} place\n`)
                        do{               
                        console.log("1. Acheter un billet")
                        console.log("2. Acheter plusieur billets")
                        console.log("0. Retourner au menu principal")
                        x = Number(prompt("votre choix :  "))

                    
                        

                        switch (x) {
                            case 1 :
                            
                                ticket_count++;
                                tickets.push({
                                    id: ticket_count,
                                    passengerName: name,
                                    tripId: tripid,
                                    seatNumber: (trainmax-tripcheck.availableSeats+1),
                                    price: `${tripcheck.price}DH`
                                })
                                trips[(tripid-1)].availableSeats-=1
                                console.log(`\nTicket acheté avec succès.\n Ticket #${tickets.length+1}\nPassager : ${name}\nTrajet : ${tripcheck.departure} → ${tripcheck.destination}\nPlace : ${50-tripcheck.availableSeats}\nPrix : ${tripcheck.price}DH\n`)
                                
                                break;
                            case  2:
                                x= Number (prompt("combien de ticket:  "))
                                    if(x<=tripcheck.availableSeats&&x>0){
                                    for(i=0;i<x;i++){
                                            ticket_count++
                                        tickets.push({
                                            id: ticket_count,
                                            passengerName: name,
                                            tripId: tripid,
                                            seatNumber: (trainmax-tripcheck.availableSeats+1),
                                            price: tripcheck.price
                                            
                                        })
                                        trips[(tripid-1)].availableSeats-=1
                                        console.log(`+++++++++++++++++++++++++\nTicket acheté avec succès.\n+++++++++++++++++++++++++\nTicket #${tickets.length}\n--------------------\nPassager : ${name}\n--------------------\nTrajet : ${tripcheck.departure} → ${tripcheck.destination}\n--------------------\nPlace : ${50-tripcheck.availableSeats}\n--------------------\nPrix : ${tripcheck.price}DH\n--------------------\n`)

                                    }

                                    }else {console.log("Cela dépasse ce qui est disponible.")}
                                    
                                
                                    
                                break;
                            case 0 :
                                break;
                            default:
                                console.log("votre choix n'exist pas !")
                                break;


                        }
                        
                    
                        
                        }while(x!==0)
                        
                    }else console.log("train complet")
                }else{ console.log("se trajet n'existe pas");
                    
                    prompt('Appuyez sur Entrée pour revenir au menu principal.');}
            }else {console.log("ce id est unvalid")
                prompt('Appuyez sur Entrée pour revenir au menu principal.');}
            

        }else {console.log("ce nom est unvalide")}

    
    
    
    
    
   
    


}


// Afficher les tickets
function chow_teckets(){
    console.log("=== TICKETS ===\n")
    if(tickets.length>0){
       
        for (let i =0;i<tickets.length;i++){
             let ticket=tickets[i]
            const tripcheck=trips.find(trip => trip.id ===ticket.tripId); // to take the info from the trip directly
            console.log(`Ticket #${ticket.id}\n--------------------\nPassager : ${ticket.passengerName}\n--------------------\nTrajet : ${tripcheck.departure}→${tripcheck.destination} \n--------------------\nPlace : ${ticket.seatNumber}\n--------------------\nPrix :  ${ticket.price}DH\n=======================\n`)



        }
        prompt('Appuyez sur Entrée pour revenir au menu principal.');

    }else{console.log ("Il n'y a pas encore de billets.")
        
        prompt('Appuyez sur Entrée pour revenir au menu principal.');
        
        }
        


}


// anuuler le ticket
function cancel_ticket(){
    
    if(tickets.length>0){
        let x=Number(prompt("entrer l'identifiant de vote ticket:  "))
        
        if (x<=(ticket_count)){
            let ticket ;
            let tik_indx;
            for (let i=0;i<tickets.length;i++){
                if(x===tickets[i].id){
                    ticket=tickets[i]


                }

                
            }
            tik_indx=tickets.findIndex(indx =>indx.id===x)
            console.log(tik_indx)
            if (ticket !==0){
                trips[ticket.tripId-1].availableSeats+=+1;
                tickets.splice(tik_indx,1)
                console.log("Ticket annulé avec succès.")
                

                


            }else {console.log("Ticket introuvable.")}



        }else{console.log("Ticket introuvable.")}


    }else{console.log("Il n'y a pas encore de billets.")}




} 


// search for tickets by name 
function search_ticket(){
   if (tickets.length!==0){
        const foundtickets=[];
        const name = prompt("Nom du passager :")
        for(i=0;i<tickets.length;i++){
            if (name===tickets[i].passengerName){

                foundtickets.push(tickets[i])



            }
        
        
            
        }
        for (let i=0;i<foundtickets.length;i++){
            const trip=trips.find(tick=>tick.id===foundtickets[i].tripId)
            console.log(`===========================\n
                Ticket # ${foundtickets[i].id}\n
Passager : ${foundtickets[i].passengerName} \n
Trajet : ${trip.departure} → ${trip.destination}\n
Place : ${foundtickets[i].seatNumber}\n
Prix : ${foundtickets[i].price} DH\n`)



        }

        
    }else{
            console.log("Il n'y a pas encore de billets.")
   }

}


// filtering tickets by depating city
function filtering_tickets(){
    const depart=prompt("Ville de départ :");
    let count = 0;
    console.log("------Résultat------\n")
    for (let i=0;i<trips.length;i++){
        
        if(depart.trim().toLowerCase()===(trips[i].departure).trim().toLowerCase()){
            console.log(` ${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH\n-------------------------\n`)
            count+=1
        }

    }
        if(count==0){
            console.log("Il n'y a aucun voyage qui part de cette ville.")
        }

     prompt("Appuyez sur Entrée pour revenir au menu principal.");
}


// Trier les trajets
function trajet_sorting(){
    let sorting_trips =[...trips];
for (let i=0;i<sorting_trips.length-1;i++){

    for(let j=0;j<sorting_trips.length-i-1;j++){

        if(sorting_trips[j].price>sorting_trips[j+1].price) {
            let temp=sorting_trips[j]
            sorting_trips[j]=sorting_trips[j+1]
            sorting_trips[j+1]=temp
        }

       

    }

    

}

        console.log("1.Trier par ordre croissant")
        console.log("2.Trier par ordre décroissant")
        console.log("0.revenir au menu principal.")
        const x=Number(prompt("Votre choix : "))
        switch (x){
            case 1:
                for (let i=0;i<sorting_trips.length;i++){
                    console.log(`${sorting_trips[i].departure} → ${sorting_trips[i].destination} : ${sorting_trips[i].price} DH\n-------------------`)
                }
                prompt("Appuyez sur Entrée pour revenir au menu principal.");
            break;
            case 2:
                for (let i=sorting_trips.length-1;i>=0;i--){
                    console.log(`${sorting_trips[i].departure} → ${sorting_trips[i].destination} : ${sorting_trips[i].price} DH\n-------------------`)
                }
                prompt("Appuyez sur Entrée pour revenir au menu principal.");
            break;
            case 0:
            break;
            default:
                console.log("Cette option n'est pas disponible.")
                prompt("Appuyez sur Entrée pour revenir au menu principal.");
            break;
        }



}

// Statistiques


function statistique(){
    console.log("======LES STATISTIQUES======")
    console.log("1.total tickets vendus")
    console.log("2.Chiffre d'affaires")
    console.log("0.Retour au menu principal")
    const choix=Number(prompt("votre choix: "))
    switch (choix){
        case 1:
            selled_tickets()
        break;
        case 2:
            Revenue()
        break;
        case 0:
            prompt("press entrer pour Retour au menu principal")
        break;
        default:
            console.log("votre choix est incorrect")
        break;


    }

}


// Nombre total de tickets vendus
function selled_tickets(){
console.log("total des tickets vendus")
if (tickets.length>0){
    console.log ("Nombre total de tickets : ",tickets.length)
}else console.log("Aucun ticket n'a encore été vendu.")


}
// Chiffre d'affaires total
function Revenue(){
    console.log("======chiffre d'affaire======");
    let total=0;
    if (tickets.length!==0){
        for (let i = 0 ; i<tickets.length;i++ ){
            total+=tickets[i].price;


        }
        console.log("Chiffre d'affaires total :",total,"DH")

    }else{console.log("Il n'y a pas encore de revenus.")}


    
}

