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

    Api.getBookmarks().then(res => {
      setBookmarkCards(res.data)
    })
    Api.getSnippets().then(res => {
      const cardData = transform.toObject(res.data)
      setCodeCards(cardData)
    })

  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const checkIfUser = (cardId) => {
    Api.getUsersByEmail()
      .then(res => {
        let usersDatabase = transform.toObjectByEmail(res.data)
        // check if user is logged in
        if (Boolean(user)) {
          // existing member
          // then you add the bookmark card
          // here we check if the user is in the database
          if (Boolean(usersDatabase[user.email])) {
            // add the card to the users database 
            Api.saveBookmarks(cardId, { email: user.email })
              .then(res => {
                console.log(res, 'has been added! ')
              })

            console.log(`this is the cardId: ${cardId}`)
            console.log(`this is the user: ${user.email}`)

            // the user is not in the database
            // we need to create a user 
          } else {

            Api.createUser(user)
              .then(res => {

                console.log(`user created!!! ${res}`)

              })

          }

        }
      });
  }

  const handleAdd = (id) => (e) => {
    // I think this is saying
    // save a previous value and then do something else // carrying the value 
    e.preventDefault();

    // ** put all cards in an object 
    let card = transform.toObject(bookmarkCards.concat(transform.toArray(codeCards)))

    // ? check the id of the snippet and if the user is logged in 
    if (card[id].snippet && user) {
      // ** code card
      console.log(card[id]['_id']);
      // checkIfUser(card[id]['_id'])

    // ? check if user is logged in 
    } else if (user) {
      // ** bookmark card 
      // check if the user is logged in and add card to user database 
      checkIfUser(card[id]['_id'])
    } else {
      // user needs to sign in to add a card
      setOpen(true);
      setMsg('invalid')
    }
  }

  const setCodeWrapper = (id) => (snippet) => {
    // where is the snippet parameter being used in this fucntion 
    // I want this info first // let me save it and the do something else 
    // ! and do we need it 
    // ! where is the snippet coming from 
    // ** snippet is coming from the source code 

    // just setting each card to have an id as the key and then
    // then rest of the object as the value of the key 
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