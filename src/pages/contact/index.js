export { default } from '../../components/_pages/contact'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}