export { default } from '../../components/_pages/handee'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}