export { default } from '../../components/_pages/MenuOrderhandee'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}