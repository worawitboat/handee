export { default } from '../../components/_pages/Menuhandee'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}