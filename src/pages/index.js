export { default } from '../components/_pages/SelectPerson'

export async function getServerSideProps(context) {
  
  return { props: { appName: "handee" } }

}