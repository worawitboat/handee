export { default } from '../../components/_pages/fu';

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}