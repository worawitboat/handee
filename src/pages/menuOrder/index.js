export { default } from '../../components/_pages/menuOder'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}