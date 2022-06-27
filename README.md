# oslash-frontend-challenge
The goal of this assignment is to build a cinema theatre ticket booking app with the following specifications —  1. You are tasked with building an app which will help a user select seats in a cinema theatre and display a time-limited summary of their selected seats. 2. You have a list of seats with `x` rows &amp; `y` columns, with these conditions —     - Any of the seats can be marked as already booked to avoid two people booking the same seats.     - Any of the seats can be marked disabled. This is important to customise the seating arrangement to match the exact arrangement of the cinema theatre.     - Each row of seats will have their own price. 3. Once the user has selected their seats, they can navigate to the next page where they will be shown a summary of the seats they chose and the total price, along with a countdown timer of a configurable number of minutes (default to 5). If they navigate back, the previously selected seats should be shown. Once the countdown has completed, if they navigate back, the selected seats should be cleared.  4. The React component should be built in a way that every cinema theatre can customise the layout and row prices. 5. Seat availability has to update in realtime – i.e. say user A has booked seat 45, while user B is on the seat selection screen, seat 45 should instantly become disabled without a refresh.     1. You can decide to build a backend for this, or you can skip it and instead design this and explain this as text – talk about the stack you would use for this and potential problems and trade-offs for mitigations.
