==> What is Reactive Programming?
        Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change

        RXJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code

==> In simple terms:
        Reactive programming is just a different way of building software applications.
        Essentially, our software is built to "react" to changes that happen (like click events, data being fetched, etc) instead of the typical way of writing software where we explicitly write code (aka "imperative" programming) to handle those changes.
==> Rxjs 

1. Reactive Programming is a new way of building apps
- our app will react to changes and handle data streams rather than we writing each event handling separately
2. RxJS is a library which helps us in making async calls and implement callback mechanisms easily using observable
3. RxJS consists of 3 main things
==> Observable
    Satelite Data Types - Observers, Schedulers,
==> Operators
        Array methods
            map
            filter
            reduce
Helps us in Data Streams

4. Observable
Its a data stream
In a ecommerce shopping cart application
orderStatus value - NULL user comes and places an order

order status will change over time // continously ch
orderStatus = order placed
orderStatus = order received
orderStatus = order processing
orderStatus = order submitted
orderStatus = order completed
needs to be informed to multiple apps

==> Subscriber
It will listen to the Observable for data changes/updates
My app is Dashboard
orderStatus - latest values always - since we have subscribed to it

Example #2
YouTube channel - ARC Tutorial
==> Observable

Data(Video) is posted every single day on my channel
Any changes that happen to my channel
Content
Video
Community Message
Subscribe
you have subscribed to my channel
You get notified everytime I post a video
There is a change in data
==> Rxjs Operators 
    Filter 
    Map
 ==> observable component (go-to)
==> interval example 
==> map
==>merge map
==>concat map
==> Switch map




