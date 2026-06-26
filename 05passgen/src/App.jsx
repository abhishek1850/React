import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passw = ""
    if (char) str += "!@#$%^&*()_><|}~"
    if (number) str += "1234567890"


    for (let i = 0; i < length; i++) {
      let c = Math.floor(Math.random() * str.length)
      passw += str.charAt(c)
    }

    setPass(passw)

  }, [length, char, number, setPass])

  useEffect(() => {
    passwordGenerator()
  }, [number, char, length, passwordGenerator])

  const passwordRef = useRef(null)
  const copythevalue = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(pass)
  }, [pass])



  return (
    <>
      <div className="min-h-screen flex justify-center  items-start pt-10">
        <div className="w-full max-w-xl bg-gray-700 p-6 rounded-lg shadow-lg ">
          <h1 className='text-2xl font-bold text-center text-white mb-6'>Password Generator</h1>
          <div className='flex gap-2 mb-4'>
            <input className='flex-1 border rounded p-2 text-black bg-white'
              type="text"
              placeholder='password'
              readOnly
              value={pass}
              ref={passwordRef}
            />
            <button onClick={copythevalue} className='bg-red-500 px-4 py-2 rounded hover:bg-red-600 cursor-pointer'>Copy</button>
          </div>
          <div className='flex item-center gap-3 mb-4 text-orange-400'>
            <input type="range" className='w-full'
              min={0}
              max={99}
              value={length}
              className='flex-1'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length :{length}</label>
            <input type="checkbox"
              defaultChecked={number}

              onChange={() => {
                setNumber((e) => !e);
              }
              }
            /> <label>Numbers</label>
            <input type="checkbox"
              defaultChecked={char}

              onChange={() => {
                setChar((e) => !e);
              }
              }

            /><label>Characters</label>

          </div>
        </div>

      </div>

    </>
  )
}

export default App
