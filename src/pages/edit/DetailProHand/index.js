export { default } from '../../../components/_pages/DetailProHand'

export async function getServerSideProps(context) {

  console.log(context);
  const { data } = context.query
  return { props: { appName: "handee",data:data  } }

}