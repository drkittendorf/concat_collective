import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/testCarousel/Carousel';
import { useAuth0 } from '@auth0/auth0-react';

import BookmarkCards from '../components/BookmarkCards/BookmarkCards';
import CodeJar from '../components/CodeJar/CodeJar';

import Api from '../utils/API';
import transform from '../utils/transform';
import pipe from '../utils/pipe'

import AlertMsg from '../components/AlertMsg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    marginBottom: '20px',
  },
}));

// data[0].

export default function FullWidthGrid() {
  const classes = useStyles();
  const [bookmarkCards, setBookmarkCards] = useState([]);
  const [codeCards, setCodeCards] = useState({});
  const { user } = useAuth0();

  // snackbar alert state
  const [open, setOpen] = useState(false)
  // what msg to send
  const [msg, setMsg] = useState('')

  useEffect(() => {

    Promise.all([Api.getBookmarks(), Api.getSnippets()]).then(([bookmarks, snippets]) => {
      const cardData = transform.toObject(snippets.data)
      setBookmarkCards(bookmarks.data)
      setCodeCards(cardData)
    });

  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // >>>>>> comp
  const saveBookmarkToUser = ({ cardId, userEmail }) => {
    Api.saveBookmarks(cardId, userEmail);
    return 'added'
  }
  const saveCodeCardToUser = ({ cardId, userEmail }) => {
    Api.saveBookmarks(cardId, userEmail);
    return 'added'
  }

  const postNotification = (msg) => {
    setOpen(true)
    setMsg(msg)
  };
  // >>> 

  const bookmarkSaveChoices = (dataBase, cardId) => {
    // ** existing member
    // then you add the bookmark card
    // ? here we check if the user is in the database
    if (Boolean(dataBase[user.email])) {
      // ** add the card to the users database 
      pipe(saveBookmarkToUser, postNotification)({ cardId, user: { email: user.email } })

      // ** new member // not in the database 
      // ? we need to create a user 
    } else {

      // ** create the user here 
      Api.createUser(user)
        .then(res => {

          // ** now that the user is created, we save the bookmark to the user 
        pipe(saveBookmarkToUser, postNotification)({ cardId, user: { email: user.email } })


        })
    }
  }

  // ** HERE 
  const codeCardChoices = (dataBase, cardId) => {
    // ** existing member
    // then you add the bookmark card
    // ? here we check if the user is in the database
    if (Boolean(dataBase[user.email])) {
      // ** add the card to the users database 
      // pipe(saveCodeCardToUser, postNotification)({ cardId, user: { email: user.email } })

      // ** new member // not in the database 
      // ? we need to create a user 
    } else {

      // ** create the user here 
      Api.createUser(user)
        .then(res => {

          // ** now that the user is created, we save the bookmark to the user 


        })
    }
  }

  const checkUser = async (cardId, cardType) => {
    // ** GET USER DATA
    let response = await Api.getUsersByEmail()

    // ** turn array of users to Object 
    let usersDatabase = await transform.toObjectByEmail(response.data)

    // we want two function one for adding bookmarks and the other for adding code snippets
    // this has to be split by a switch
    // the cardType will decide which function we use 
    switch (cardType) {
      case 'codeCard':
        // we gotta figure out this path 
        codeCardChoices(usersDatabase, cardId)
        break;
      case 'bookMarkCard':
        return bookmarkSaveChoices(usersDatabase, cardId); 


      default: console.log('something went really wont in the switch for choices')
        break;
    }
  }

  const handleAdd = (id) => (e) => {
    // I think this is saying
    // save a previous value and then do something else // carrying the value 
    e.preventDefault();

    // ** put all cards in an object 
    let card = transform.toObject(bookmarkCards.concat(transform.toArray(codeCards)))

    // ** CHECK IF USER IS LOGGED IN
    // ? check the id of the snippet and if the user is logged in 
    if (card[id].snippet && user) {
      // ** code card
      checkUser(card[id]['_id'], 'codeCard')

      // ? check if user is logged in 
    } else if (user) {
      // ** bookmark card 
      // check if the user is logged in and add card to user database 
      checkUser(card[id]['_id'], 'bookMarkCard')
    } else {
      // user needs to sign in to add a card
      postNotification('invalid')
    }
  }

  const setCodeWrapper = (id) => (snippet) => {

    setCodeCards({ ...codeCards, [id]: { ...codeCards[id], snippet } })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10}>
          {open ?
            <AlertMsg
              msg={msg}
              open={open}
              handleClose={handleClose}
            /> : ''}
          <Carousel />
          <SearchBar />
          {/* filter buttons here */}
        </Grid>
        <Grid item xs={10} container spacing={3} justify="flex-start" >
          {bookmarkCards.map(card => {
            return <BookmarkCards
              key={card._id} {...card}
              handleAdd={handleAdd}
            />
          })}

          {Object.keys(codeCards).map(key => {
            const card = codeCards[key]
            return <CodeJar
              key={card._id} {...card}
              handleAdd={handleAdd}
              setCode={setCodeWrapper(card._id)}
            />
          })}
        </Grid>
      </Grid>
    </div>
  );
}



// ? where can I use more closures in my code ?

// todo: live chat with help v2  => problem
// todo: create new collection
// todo: code cards get thing
// todo: code accordion
// todo: delete from you own but not global
// todo: search code cards or links
// todo: search slider for categories (filters)
// => new bookmarks or code

// todo: sandbox api
// todo: minigame:

// todo: emoji: rick roll link [DONE]
// todo: (newlyConcated) (language(dropdowm))




    // promise.all([Api.getBookmarks, getUserBookmarks]).then(([resGetBookmarks, resGetUserBookmarks]) => {

    //   
  //  setBookmarkCards(resGetUserBookmarks.toObject   ===  resGetBookmarks)
  //})

  // call for an email and if no matched trigger create
  // unique

  // dont create a user 
  // just the user and get us their ID 

  // if not create a the user 

    // if(user){
    //   Api.createUse(user).then
    // }





        //       // console.log(`user created ${JSON.stringify(res)} `)
          //       // now that we have created the user
          //       // we can now add the bookmark to the profile model 
          //       // console.log(res.data.email);

          //       // send the id of the card and the user email 
          //       Api.saveBookmarks(cardId, res.data.email)
          //         .then(res => {
          //           console.log(res, 'has been added! ,  and welcome new user')
          //         })

          //     })

            //   // new member
          //   // create a profile with the auth0 object 


      // if (user) {
      //   res.data.filter(fiteredCards => {
      //     fiteredCards // 
      ////compare to the user cards  turn the arr in user
      //   })
      // } else {



    // Api.getBookmarks().then(res => {
    //   setBookmarkCards(res.data)
    // })
    // Api.getSnippets().then(res => {
    //   const cardData = transform.toObject(res.data)
    //   setCodeCards(cardData)
    // })




    // adding user 
     // saveBookmarkToUser(cardId, { email: user.email })

          // postNotification('added')



                        // saveBookmarkToUser(cardId, { email: user.email })

              // postNotification('added')

    // // ** existing member
    // // then you add the bookmark card
    // // ? here we check if the user is in the database
    // if (Boolean(usersDatabase[user.email])) {
    //   // ** add the card to the users database 
    //   pipe(saveBookmarkToUser, postNotification)({ cardId, user: { email: user.email } })

    //   // ** new member // not in the database 
    //   // ? we need to create a user 
    // } else {

    //   // ** create the user here 
    //   Api.createUser(user)
    //     .then(res => {

    //       // ** now that the user is created, we save the bookmark to the user 
    //       pipe(saveBookmarkToUser, postNotification)({ cardId, user: { email: user.email } })

    //     })
    // }
    // });

    // patch