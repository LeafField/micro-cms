import Head from "next/head";
import React from "react";
import { siteMeta } from "../lib/constant";
import { useRouter } from "next/router";

type Props = {
  pageTitle?: string;
  pageDesc?: string;
};

const Meta = ({ pageTitle, pageDesc }: Props) => {
  const router = useRouter();
  const { siteDesc, siteLacale, siteLang, siteTitle, siteURL, sitetype } =
    siteMeta;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const url = `${siteURL}${router.asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

export default Meta;
