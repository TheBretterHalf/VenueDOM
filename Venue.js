var venue = {
    name: "Paul Wears Two Left Shoes",
    seatsAvail:["100","101","102","103","104","105","106","107","108","109","110","111","112","113"],
    bookedSeats:[],
    displaySeats: function (){
        console.log(this.seatsAvail.length-this.bookedSeats.length +" seats available.");
    },
    Displayseats: function(){
        var seatsToBook ="";
        for (var i=0; i<venue.seatsAvail.length;i++){
            //need to escape quotes on the following line, research escaping characters and quotes especially
            seatsToBook +="<button class='dropdown-item funbuttonatag seat' id='this.seatsAvail[i]' onclick='this.SeatAvails(" +this.seatsAvail[i] + ");' value=\'"+this.seatsAvail[i]+"\'>"+this.seatsAvail[i]+"</button><br>";
        }
        document.getElementById("seatsAvailo").innerHTML = seatsToBook;
    },
    bookSeat: function(seat){ 
        for (let i=0;i<this.seatsAvail.length;i++){
            if (document.getElementById("seatsAvailSelect").value==this.seatsAvail[i]){
                this.bookedSeats = this.seatsAvail.splice(i,1).concat(this.bookedSeats);
                document.getElementById("rmBooked").innerText=this.bookedSeats;
                this.Displayseats()
            }
        }
    }
};