import Vconsole from 'vconsole'
let vConsole
if (process.env.NODE_ENV !== 'production') {
  vConsole = new Vconsole()
}
export default vConsole