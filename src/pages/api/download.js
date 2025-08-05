import { NextApiRequest, NextApiResponse } from 'next';

async function apihandler (request,response) 
const apirequest = request
{
  response.json({ message: 'Response message' });
}