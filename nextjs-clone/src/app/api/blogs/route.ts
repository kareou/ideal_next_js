import prisma from '@/lib/prisma';

export async function GET(request: Request) {
        const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '12');
    const skip = (page - 1) * limit;
    const [blogs, totalBlogs] = await Promise.all([
        prisma.blog.findMany({
            skip,
            take: limit,
            orderBy: { date: 'desc' },
        }),
        prisma.blog.count(),
    ]);
    const totalPages = Math.ceil(totalBlogs / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;
    return Response.json({
        blogs,
        pagination: {
            currentPage: page,
            totalPages,
            totalBlogs,
            limit,
            hasNextPage,
            hasPreviousPage,
        },
    });
}

export async function POST(request: Request) {
    const { title, content, excerpt, author, category } = await request.json();
    const newBlog = await prisma.blog.create({
        data: {
            title,
            content,
            excerpt,
            author,
            category,
            // date will default to now()
        },
    });
    return Response.json(newBlog);
}

export async function PUT(request: Request) {
    const { id, title, content, excerpt, author, category } = await request.json();
    const updatedBlog = await prisma.blog.update({
        where: { id },
        data: {
            title,
            content,
            excerpt,
            author,
            category,
        },
    });
    return Response.json(updatedBlog);
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    await prisma.blog.delete({
        where: { id },
    });
    return Response.json({ message: 'Blog deleted successfully' });
}