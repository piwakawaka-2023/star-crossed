import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import Header from './Header'
import Nav from './Nav'

function Messages() {
  const dispatch = useAppDispatch()

  const matches = useAppSelector((state) => state.matches)
  const messages = [
    {
      id: 12,
      auth0_id: '12',
      name: 'juliette',
      age: 18,
      email: 'sampleemail@gmail.com',
      gender: 'femme',
      preference: '["masc"]',
      bio: 'this is my bio',
      birthday: '',
      image: 'images/user',
      star_sign_id: 12,
      matches: '[]',
      compatibility: '[4,3,2,1,3,5,2,1,4,3,5,1]',
      created_at: '2023-07-04T02:38:35.767Z',
      updated_at: '2023-07-04T02:38:35.767Z',
      star_sign: {
        id: 12,
        date_range: '02/19-03/20',
        name: 'Pisces',
        blurb: 'Gonna Cry?',
        image: '/images/image',
        default_compatibility: '[4,3,2,1,3,5,2,1,4,3,5,1]',
        created_at: '2023-07-04T02:38:35.726Z',
        updated_at: '2023-07-04T02:38:35.726Z',
      },
    },
    {
      id: 14,
      auth0_id: 'google-oauth2|113373734308394882359',
      name: 'Amanda',
      age: 19,
      email: 'amandayvetteturnbull@gmail.com',
      gender: 'femme',
      preference: '["masc","femme","them"]',
      bio: 'Tell us about yourself!',
      birthday: '2004-06-13',
      image: 'images/user',
      star_sign_id: 3,
      matches: '[]',
      compatibility: '[4,2,3,2,4,2,5,2,3,1,5,2]',
      created_at: '2023-07-04T04:57:02.246Z',
      updated_at: '2023-07-04T04:57:02.246Z',
      star_sign: {
        id: 3,
        date_range: '05/21-06/20',
        name: 'Gemini',
        blurb: 'Twinning',
        image: '/images/image',
        default_compatibility: '[4,2,3,2,4,2,5,2,3,1,5,2]',
        created_at: '2023-07-04T02:38:35.711Z',
        updated_at: '2023-07-04T02:38:35.711Z',
      },
    },
    {
      id: 14,
      auth0_id: 'google-oauth2|113373734308394882359',
      name: 'Amanda',
      age: 19,
      email: 'amandayvetteturnbull@gmail.com',
      gender: 'femme',
      preference: '["masc","femme","them"]',
      bio: 'Tell us about yourself!',
      birthday: '2004-06-13',
      image: 'images/user',
      star_sign_id: 3,
      matches: '[]',
      compatibility: '[4,2,3,2,4,2,5,2,3,1,5,2]',
      created_at: '2023-07-04T04:57:02.246Z',
      updated_at: '2023-07-04T04:57:02.246Z',
      star_sign: {
        id: 3,
        date_range: '05/21-06/20',
        name: 'Gemini',
        blurb: 'Twinning',
        image: '/images/image',
        default_compatibility: '[4,2,3,2,4,2,5,2,3,1,5,2]',
        created_at: '2023-07-04T02:38:35.711Z',
        updated_at: '2023-07-04T02:38:35.711Z',
      },
    },
    {
      id: 14,
      auth0_id: 'google-oauth2|113373734308394882359',
      name: 'Amanda',
      age: 19,
      email: 'amandayvetteturnbull@gmail.com',
      gender: 'femme',
      preference: '["masc","femme","them"]',
      bio: 'Tell us about yourself!',
      birthday: '2004-06-13',
      image: 'images/user',
      star_sign_id: 3,
      matches: '[]',
      compatibility: '[4,2,3,2,4,2,5,2,3,1,5,2]',
      created_at: '2023-07-04T04:57:02.246Z',
      updated_at: '2023-07-04T04:57:02.246Z',
      star_sign: {
        id: 3,
        date_range: '05/21-06/20',
        name: 'Gemini',
        blurb: 'Twinning',
        image: '/images/image',
        default_compatibility: '[4,2,3,2,4,2,5,2,3,1,5,2]',
        created_at: '2023-07-04T02:38:35.711Z',
        updated_at: '2023-07-04T02:38:35.711Z',
      },
    },
  ]
  return (
    <>
      <Header />
      <div>
        {messages.map((user) => {
          return (
            <Link key={user.id} to={'/message'}>
              <div>
                <p>{user.name}</p>
                <p>{user.star_sign.name}</p>
                <p>message here</p>
                <p>message date</p>
              </div>
            </Link>
          )
        })}
      </div>
      <Nav />
    </>
  )
}

export default Messages
