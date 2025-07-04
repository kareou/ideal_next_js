import prisma from '@/lib/prisma';

export async function GET(request: Request,
    { params }: { params: Promise<{ team: string }> }
) {

        const { id } = await params;
        console.log('Fetching blog post with ID:', id);
    const blogs = await prisma.blog.findUnique({
        where: { id: Number(id) },
    });

    return Response.json(
        blogs);
}
